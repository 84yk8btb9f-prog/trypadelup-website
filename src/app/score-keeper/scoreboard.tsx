"use client";

import { useState } from "react";
import { RotateCcw, Plus, Settings } from "lucide-react";

type Team = 1 | 2;
type ScoringMode = "advantage" | "golden" | "star";

const POINT_LABELS = ["0", "15", "30", "40"] as const;

type GameState = {
  team1Points: number;
  team2Points: number;
  team1Games: number;
  team2Games: number;
  team1Sets: number;
  team2Sets: number;
  servingTeam: Team;
  serverIndex: 0 | 1;
  isInTiebreak: boolean;
  tiebreakStarter: Team;
  matchOver: boolean;
  matchWinner: Team | null;
  starPointDeucesUsed: number;
};

const initialState: GameState = {
  team1Points: 0,
  team2Points: 0,
  team1Games: 0,
  team2Games: 0,
  team1Sets: 0,
  team2Sets: 0,
  servingTeam: 1,
  serverIndex: 0,
  isInTiebreak: false,
  tiebreakStarter: 1,
  matchOver: false,
  matchWinner: null,
  starPointDeucesUsed: 0,
};

function pointLabel(team1Points: number, team2Points: number, team: Team): string {
  const isInDeuceTerritory = team1Points >= 3 && team2Points >= 3;
  const myPoints = team === 1 ? team1Points : team2Points;
  const opponentPoints = team === 1 ? team2Points : team1Points;

  if (!isInDeuceTerritory) {
    return POINT_LABELS[myPoints];
  }
  if (myPoints === opponentPoints) {
    return "40";
  }
  if (myPoints > opponentPoints) {
    return "AD";
  }
  return "—";
}

function isSetWon(games1: number, games2: number, team: Team): boolean {
  const myGames = team === 1 ? games1 : games2;
  const oppGames = team === 1 ? games2 : games1;
  if (myGames >= 6 && myGames - oppGames >= 2) return true;
  if (myGames === 7) return true;
  return false;
}

export default function PadelScoreboard() {
  const [state, setState] = useState<GameState>(initialState);
  const [scoringMode, setScoringMode] = useState<ScoringMode>("advantage");
  const [team1Name, setTeam1Name] = useState("Team 1");
  const [team2Name, setTeam2Name] = useState("Team 2");
  const [showSettings, setShowSettings] = useState(false);

  function awardPoint(team: Team) {
    if (state.matchOver) return;
    setState((prev) => {
      const next = { ...prev };

      // Tiebreak logic
      if (next.isInTiebreak) {
        if (team === 1) next.team1Points += 1;
        else next.team2Points += 1;

        const total = next.team1Points + next.team2Points;
        if (total > 0 && total % 2 === 1) {
          next.servingTeam = next.servingTeam === 1 ? 2 : 1;
        }

        const myTb = team === 1 ? next.team1Points : next.team2Points;
        const oppTb = team === 1 ? next.team2Points : next.team1Points;

        if (myTb >= 7 && myTb - oppTb >= 2) {
          if (team === 1) {
            next.team1Games += 1;
            next.team1Sets += 1;
          } else {
            next.team2Games += 1;
            next.team2Sets += 1;
          }
          next.isInTiebreak = false;
          next.team1Points = 0;
          next.team2Points = 0;
          next.team1Games = 0;
          next.team2Games = 0;
          next.servingTeam = next.tiebreakStarter === 1 ? 2 : 1;
          next.tiebreakStarter = next.servingTeam;

          if (next.team1Sets >= 2) {
            next.matchOver = true;
            next.matchWinner = 1;
          } else if (next.team2Sets >= 2) {
            next.matchOver = true;
            next.matchWinner = 2;
          }
        }
        return next;
      }

      // Standard game
      if (team === 1) next.team1Points += 1;
      else next.team2Points += 1;

      const myPoints = team === 1 ? next.team1Points : next.team2Points;
      const oppPoints = team === 1 ? next.team2Points : next.team1Points;

      let gameWon = false;

      if (myPoints >= 4 && myPoints - oppPoints >= 2) {
        gameWon = true;
      } else if (scoringMode === "golden" && myPoints >= 4 && myPoints === oppPoints + 1 && oppPoints >= 3) {
        // Golden Point: at deuce, next point wins
        if (next.team1Points >= 3 && next.team2Points >= 3 && Math.abs(next.team1Points - next.team2Points) === 1) {
          gameWon = true;
        }
      } else if (scoringMode === "star" && next.team1Points >= 3 && next.team2Points >= 3) {
        // STAR POINT: at 3rd deuce, decisive point
        if (next.starPointDeucesUsed >= 2 && Math.abs(next.team1Points - next.team2Points) === 1) {
          gameWon = true;
        }
        if (next.team1Points === next.team2Points) {
          next.starPointDeucesUsed += 1;
        }
      }

      if (gameWon) {
        if (team === 1) next.team1Games += 1;
        else next.team2Games += 1;
        next.team1Points = 0;
        next.team2Points = 0;
        next.starPointDeucesUsed = 0;
        next.servingTeam = next.servingTeam === 1 ? 2 : 1;

        if (isSetWon(next.team1Games, next.team2Games, 1)) {
          next.team1Sets += 1;
          next.team1Games = 0;
          next.team2Games = 0;
        } else if (isSetWon(next.team1Games, next.team2Games, 2)) {
          next.team2Sets += 1;
          next.team1Games = 0;
          next.team2Games = 0;
        } else if (next.team1Games === 6 && next.team2Games === 6) {
          next.isInTiebreak = true;
          next.tiebreakStarter = next.servingTeam;
        }

        if (next.team1Sets >= 2) {
          next.matchOver = true;
          next.matchWinner = 1;
        } else if (next.team2Sets >= 2) {
          next.matchOver = true;
          next.matchWinner = 2;
        }
      }

      return next;
    });
  }

  function reset() {
    setState(initialState);
  }

  const isInDeuce =
    state.team1Points >= 3 &&
    state.team2Points >= 3 &&
    state.team1Points === state.team2Points &&
    !state.isInTiebreak;

  const team1Score = state.isInTiebreak
    ? String(state.team1Points)
    : pointLabel(state.team1Points, state.team2Points, 1);
  const team2Score = state.isInTiebreak
    ? String(state.team2Points)
    : pointLabel(state.team1Points, state.team2Points, 2);

  return (
    <div className="px-6 py-8">
      <div className="mb-6 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00E676]">
          {state.matchOver
            ? "Match complete"
            : state.isInTiebreak
            ? "Tiebreak"
            : isInDeuce
            ? "Deuce"
            : `Set ${state.team1Sets + state.team2Sets + 1}`}
        </span>
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="text-xs text-white/40 hover:text-white/70 transition-colors inline-flex items-center gap-1.5"
        >
          <Settings className="size-3.5" strokeWidth={1.75} />
          Settings
        </button>
      </div>

      {showSettings && (
        <div className="mb-8 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <input
              value={team1Name}
              onChange={(e) => setTeam1Name(e.target.value)}
              placeholder="Team 1 name"
              className="w-full rounded-lg border border-white/[0.08] bg-[#0A0A0A] px-3 py-2 text-sm text-white placeholder:text-white/30 focus:border-[#00E676]/40 focus:outline-none"
            />
            <input
              value={team2Name}
              onChange={(e) => setTeam2Name(e.target.value)}
              placeholder="Team 2 name"
              className="w-full rounded-lg border border-white/[0.08] bg-[#0A0A0A] px-3 py-2 text-sm text-white placeholder:text-white/30 focus:border-[#00E676]/40 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-[0.18em] text-white/40 mb-2">
              Scoring at deuce
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(
                [
                  { value: "advantage", label: "Advantage" },
                  { value: "golden", label: "Golden Point" },
                  { value: "star", label: "STAR POINT" },
                ] as const
              ).map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setScoringMode(opt.value)}
                  className={`rounded-lg border px-3 py-2 text-xs font-medium transition-colors ${
                    scoringMode === opt.value
                      ? "border-[#00E676] bg-[#00E676]/10 text-white"
                      : "border-white/[0.08] bg-white/[0.02] text-white/60 hover:text-white"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 mb-8">
        {[
          { team: 1 as Team, name: team1Name, score: team1Score, games: state.team1Games, sets: state.team1Sets },
          { team: 2 as Team, name: team2Name, score: team2Score, games: state.team2Games, sets: state.team2Sets },
        ].map((t) => (
          <div
            key={t.team}
            className={`rounded-2xl border p-5 transition-colors ${
              state.servingTeam === t.team
                ? "border-[#00E676]/30 bg-[#00E676]/[0.04]"
                : "border-white/[0.06] bg-white/[0.02]"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45 truncate max-w-[70%]">
                {t.name}
              </span>
              {state.servingTeam === t.team && !state.matchOver && (
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#00E676]">
                  Serve
                </span>
              )}
            </div>
            <div className="font-heading text-6xl font-bold text-white leading-none mb-3">
              {t.score}
            </div>
            <div className="flex justify-between text-xs text-white/40">
              <span>Games {t.games}</span>
              <span>Sets {t.sets}</span>
            </div>
          </div>
        ))}
      </div>

      {state.matchOver ? (
        <div className="rounded-2xl border border-[#00E676]/30 bg-[#00E676]/[0.06] p-6 text-center mb-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[#00E676] mb-2">
            Match winner
          </p>
          <p className="font-heading text-2xl font-bold text-white">
            {state.matchWinner === 1 ? team1Name : team2Name}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 mb-4">
          <button
            onClick={() => awardPoint(1)}
            className="flex items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] py-5 text-sm font-semibold text-white/85 hover:border-[#00E676]/40 hover:text-white transition-colors"
          >
            <Plus className="size-4" strokeWidth={2} />
            {team1Name}
          </button>
          <button
            onClick={() => awardPoint(2)}
            className="flex items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] py-5 text-sm font-semibold text-white/85 hover:border-[#00E676]/40 hover:text-white transition-colors"
          >
            <Plus className="size-4" strokeWidth={2} />
            {team2Name}
          </button>
        </div>
      )}

      <button
        onClick={reset}
        className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.06] py-3 text-xs uppercase tracking-[0.18em] text-white/40 hover:text-white/70 hover:border-white/[0.12] transition-colors"
      >
        <RotateCcw className="size-3.5" strokeWidth={1.75} />
        Reset
      </button>
    </div>
  );
}
