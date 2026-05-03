/**
 * Live ET-business-hours availability check for human (Duane) bookings.
 *
 * "Available now" = Mon-Fri 9am-6pm ET (server time at request).
 * "Office hours · book a slot" = otherwise.
 *
 * This is intentionally simple — no holiday calendar, no PTO. The cal.com
 * page handles real-time availability anyway. This badge just signals
 * "is right now generally a sane time to expect human response."
 */

export type Availability =
  | { state: 'available'; label: string; class: 'available' }
  | { state: 'office-hours'; label: string; class: 'offline' };

export function getDuaneAvailability(now: Date = new Date()): Availability {
  // Convert UTC to ET (rough — doesn't handle DST perfectly, but close enough)
  const etOffsetHours = -5; // EST baseline; site doesn't depend on minute precision
  const utcHours = now.getUTCHours();
  const utcDay = now.getUTCDay(); // 0 = Sun
  let etHour = utcHours + etOffsetHours;
  let etDay = utcDay;
  if (etHour < 0) {
    etHour += 24;
    etDay = (etDay + 6) % 7;
  } else if (etHour >= 24) {
    etHour -= 24;
    etDay = (etDay + 1) % 7;
  }

  const isWeekday = etDay >= 1 && etDay <= 5;
  const inHours = etHour >= 9 && etHour < 18;

  if (isWeekday && inHours) {
    return { state: 'available', label: 'Available now · ET hours', class: 'available' };
  }
  return { state: 'office-hours', label: 'Office hours · book a slot', class: 'offline' };
}
