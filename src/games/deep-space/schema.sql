-- Schema for storing Deep Space teams and matches
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS matches (
    team_number INTEGER NOT NULL,
    type TEXT NOT NULL,
    match_number INTEGER NOT NULL,
    -- 0 = blue, 1 = red
    alliance TINYINT(1) NOT NULL,
    cargo_tracker_id INTEGER NOT NULL,
    hatch_tracker_id INTEGER NOT NULL,

    tech_fouls INTEGER NOT NULL,
    fouls INTEGER NOT NULL,
    yellow_card TINYINT(1) NOT NULL,
    red_card TINYINT(1) NOT NULL,
    estopped TINYINT(1) NOT NULL,
    borked TINYINT(1) NOT NULL,
    ranking_points INTEGER NOT NULL,
    foul_points INTEGER NOT NULL,
    bonus_points INTEGER NOT NULL,

    comments TEXT NOT NULL,
    defended TINYINT(1) NOT NULL,
    noshow TINYINT(1) NOT NULL,

    -- Deep Space specific
    helps_hab_climb TINYINT(1) NOT NULL,
    start_hab_level SMALLINT(4) NOT NULL,
    end_hab_level SMALLINT(4) NOT NULL,
    crosses_start_line TINYINT(1) NOT NULL,

    left_rocket_assembled TINYINT(1) NOT NULL,
    right_rocket_assembled TINYINT(1) NOT NULL,

    hab_ranking_point TINYINT(1) NOT NULL,
    rocket_ranking_point TINYINT(1) NOT NULL,

    FOREIGN KEY (cargo_tracker_id) REFERENCES cargo_trackers (id),
    FOREIGN KEY (hatch_tracker_id) REFERENCES hatch_trackers (id)
);

CREATE TABLE IF NOT EXISTS cargo_trackers (
    id INTEGER NOT NULL PRIMARY KEY,

    dropped_auto INTEGER NOT NULL,
    dropped_teleop INTEGER NOT NULL,

    ship_auto INTEGER NOT NULL,
    ship_teleop INTEGER NOT NULL,

    rocket_auto INTEGER NOT NULL,
    rocket_teleop INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS hatch_trackers (
    id INTEGER NOT NULL PRIMARY KEY,

    dropped_auto INTEGER NOT NULL,
    dropped_teleop INTEGER NOT NULL,

    ship_auto INTEGER NOT NULL,
    ship_teleop INTEGER NOT NULL,

    rocket_auto INTEGER NOT NULL,
    rocket_teleop INTEGER NOT NULL
);

-- TOOD: indexing for performance
