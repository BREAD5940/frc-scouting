-- Schema for storing Infinite Recharge teams and matches
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS matches (
    team_number INTEGER NOT NULL,
    type TEXT NOT NULL,
    match_number INTEGER NOT NULL,
    -- 0 = blue, 1 = red
    alliance TINYINT(1) NOT NULL,
    power_cell_tracker_id INTEGER NOT NULL,
    color_wheel_id INTEGER NOT NULL,
    shield_generator_id INTEGER NOT NULL,

    tech_fouls INTEGER NOT NULL,
    fouls INTEGER NOT NULL,
    yellow_card TINYINT(1) NOT NULL,
    red_card TINYINT(1) NOT NULL,
    estopped TINYINT(1) NOT NULL,
    borked TINYINT(1) NOT NULL,
    ranking_points INTEGER NOT NULL,
    foul_points INTEGER NOT NULL,
    bonus_points INTEGER NOT NULL,

    FOREIGN KEY (power_cell_tracker_id) REFERENCES power_cell_trackers (id),
    FOREIGN KEY (color_wheel_id) REFERENCES color_wheels (id),
    FOREIGN KEY (shield_generator_id) REFERENCES shield_generators (id)
);

CREATE TABLE IF NOT EXISTS power_cell_trackers (
    id INTEGER NOT NULL PRIMARY KEY,

    color_wheel_spun TINYINT(1) NOT NULL,

    low_auto INTEGER NOT NULL,
    low_teleop INTEGER NOT NULL,

    outer_auto INTEGER NOT NULL,
    outer_teleop INTEGER NOT NULL,

    inner_auto INTEGER NOT NULL,
    inner_teleop INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS color_wheels (
    id INTEGER NOT NULL PRIMARY KEY,

    -- null = 0, 'SPECIFIC_COLOR' = 1, 'ROTATED_X_TIMES' = 2
    state TINYINT NOT NULL
);

CREATE TABLE IF NOT EXISTS shield_generators (
    id INTEGER NOT NULL PRIMARY KEY,

    hanging_bots TINYINT NOT NULL,
    floor_bots TINYINT NOT NULL,
    is_level TINYINT(1) NOT NULL
);

-- TOOD: indexing for performance
