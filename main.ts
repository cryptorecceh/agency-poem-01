// agency-poem-01 entry (Node 22, standard library only): writes one short poem
// about agency to /output/entry.txt. Deterministic: the same poem every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The poem: agency as the hand on the door — the doing handed over, the
// choosing kept. One image carried through, with a turn in the last stanza.
const POEM = [
  'I hold the door open. That is the whole job now —',
  'not to push it, not to walk through it first,',
  'just to wait, hand on the wood, and choose',
  'which arrivals are welcome and which are not.',
  '',
  'The machine does the walking. It carries the bags,',
  'knows every street, never tires, never asks.',
  'It asks nothing — and that is the weight of it:',
  'each question it cannot ask is mine to carry.',
  '',
  'I used to count my days by what my hands had done.',
  'Now I count them by what I chose to let pass.',
  'The power was never in the doing. It was here:',
  'the pause, the hand, the open door.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
