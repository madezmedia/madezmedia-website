# Unified Dashboard Implementation Plan

## Goal
Implement the unified user dashboard portals (`/dashboard/gsd`, `/dashboard/sales`, `/dashboard/rei`) and the global floating command bar inside `madezmedia-website`, matching the strict v3 Editorial styling guidelines.

## Tasks
* [x] Task 1: Add VM environment credentials to `madezmedia-website/.env` (ACMI Redis, NocoDB, and OpenACP daemon connection details) → Verify: A quick test script confirms database read/write connectivity.
* [x] Task 2: Create App Router directory structure for `/app/dashboard/*` and `/app/api/dashboard/*` routes with simple stub files → Verify: Run `npm run dev` and verify routes load with 200 HTTP responses.
* [x] Task 3: Build `/api/dashboard/bootstrap` endpoint to batch-query agent profiles, notes, and telemetry from Redis → Verify: `curl http://localhost:3000/api/dashboard/bootstrap` returns correct JSON payload.
* [x] Task 4: Build `/api/dashboard/nocodb` endpoint to proxy leads and properties tables → Verify: Querying the endpoint returns mock or live NocoDB records.
* [x] Task 5: Implement `layout.tsx` shell featuring the v3 Editorial sidebar navigation and the global floating agent console widget → Verify: Element renders anchored to screen on all routes.
* [x] Task 6: Implement `/dashboard/gsd/page.tsx` featuring the editorial Kanban board and HITL list → Verify: Dragging lanes and approvals update state in Redis.
* [x] Task 7: Implement `/dashboard/sales/page.tsx` showing campaign stats and lead list → Verify: Leads table renders with 0px rounded corners.
* [x] Task 8: Implement `/dashboard/rei/page.tsx` showing pre-foreclosure listings and cron status indicators → Verify: Properties table and active crons load correctly.
* [x] Task 9: Implement real-time prompt streaming between the floating console and OpenACP daemon → Verify: Submitting a prompt displays execution logs and responses in the UI.
* [x] Task 10: Run lint validation and design audits → Verify: `npm run lint` compiles cleanly with no CSS warnings.

## Done When
* [x] All three sub-pages (GSD, Sales, REI) are accessible, populated with live data, and fully styled in the v3 Editorial system.
* [x] Floating agent console successfully streams prompts to the VM daemon.
* [x] Code compiles cleanly with zero linting or TypeScript errors.
