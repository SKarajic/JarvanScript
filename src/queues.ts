import * as Queues from "./classes/enums/queues";

const {
  SOLO_QUEUE,
  FLEX_QUEUE,
  FLEX_THREE,
} = Queues.Queues;

module.exports = {
  FLEX_QUEUE,
  FLEX_THREE,
  SOLO_QUEUE,
  default: Queues.Queues,
};
