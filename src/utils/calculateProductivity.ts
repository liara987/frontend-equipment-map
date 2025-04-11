type HistoryEntry = {
  date: string;
  time: string;
  stateName: string;
  stateColor: string;
};

const parseTimestamp = ({ date, time }: HistoryEntry): number => {
  const [day, month, year] = date.split("/");
  return new Date(`${year}-${month}-${day}T${time}`).getTime();
};

const sortByTimestamp = (history: HistoryEntry[]): HistoryEntry[] =>
  [...history].sort((a, b) => parseTimestamp(a) - parseTimestamp(b));

const calculateOperatingTime = (entries: HistoryEntry[]): number => {
  let total = 0;

  for (let i = 0; i < entries.length - 1; i++) {
    const current = entries[i];
    const next = entries[i + 1];

    if (current.stateName === "Operando") {
      const duration = parseTimestamp(next) - parseTimestamp(current);
      if (duration > 0) total += duration;
    }
  }

  return total;
};

export function calculateProductivity(history: HistoryEntry[]): number {
  if (!history || history.length < 2) return 0;

  const sortedHistory = sortByTimestamp(history);
  const operatingMs = calculateOperatingTime(sortedHistory);

  const operatingHours = operatingMs / (1000 * 60 * 60);
  const productivity = (operatingHours / 24) * 100;

  return Number(productivity.toFixed(2));
}
