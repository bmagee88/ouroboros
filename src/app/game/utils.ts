export const rollD = (sides: number): number => {
  return Math.floor(Math.random() * sides) + 1;
};

export const getEvent = (
  fd: number,
  sd: number,
  dn: number,
  dn_max: number
): { events: string[]; hasLifeEvent: boolean; youDied: boolean } => {
  let events = [];
  let hasLifeEvent = false;
  let youDied = false;
  if (fd + sd === dn || dn === dn_max) {
    events.push("death");
    youDied = true;
    return { events, hasLifeEvent, youDied };
  }
  if (fd === sd) {
    events.push("life event");
    hasLifeEvent = true;
  }
  if (checkFailingHealth(fd + sd, dn)) {
    events.push("failing health");
  }
  return { events, hasLifeEvent, youDied };
};

export const checkFailingHealth = (rollSum: number, dn: number): boolean => {
  return rollSum === dn + 1 || rollSum < dn;
};

export const checkIfHealthImproved = (): boolean => {
  return rollD(4) === 4;
};
