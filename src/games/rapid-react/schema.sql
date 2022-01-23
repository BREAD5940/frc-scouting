-- Schema for storing Rapid React teams and matches
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS matches (
    team_number INTEGER NOT NULL,
    type TEXT NOT NULL,
    match_number INTEGER NOT NULL,
    -- 0 = blue, 1 = red
    alliance TINYINT(1) NOT NULL,

    shots_made_highgoal_auto INTEGER NOT NULL,
    shots_made_highgoal_teleop INTEGER NOT NULL,
    shots_made_lowgoal_auto INTEGER NOT NULL,
    shots_made_lowgoal_teleop INTEGER NOT NULL,

    shots_missed_highgoal_auto INTEGER NOT NULL,
    shots_missed_highgoal_teleop INTEGER NOT NULL,
    shots_missed_lowgoal_auto INTEGER NOT NULL,
    shots_missed_lowgoal_teleop INTEGER NOT NULL,

    -- 0 = didn't attempt, 1 = attempted but unsuccessful, 2 = low, 3 = mid, 4 = high, 5 = traversal
    monkey_bar_state INTEGER NOT NULL,

    tech_fouls INTEGER NOT NULL,
    fouls INTEGER NOT NULL,
    yellow_card TINYINT(1) NOT NULL,
    red_card TINYINT(1) NOT NULL,
    estopped TINYINT(1) NOT NULL,
    borked TINYINT(1) NOT NULL,
    ranking_points INTEGER NOT NULL,
    foul_points INTEGER NOT NULL,
    bonus_points INTEGER NOT NULL
);
