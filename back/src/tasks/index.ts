import { RequestOperationTask } from "./request-operation-task";
import { SendOperationTask } from "./send-operation-task";
import { StepBtcboxTask } from "./step-btcbox-taks";
import { StepCoreTask } from "./step-core-taks";
import { StepCsmfTask } from "./step-csmf-taks";
import { StepInmTask } from "./step-inm-taks";

export default [
  SendOperationTask,
  RequestOperationTask,
  StepBtcboxTask,
  StepCsmfTask,
  StepCoreTask,
  StepInmTask,
].forEach((task) => new task());
