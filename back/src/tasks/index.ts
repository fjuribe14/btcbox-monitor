import { ComponenteTask } from "./componente/componente-task";
import { Dummy } from "./dummy";
import { RequestOperationTask } from "./request-operation-task";
import { SendOperationTask } from "./send-operation-task";
import { StepBtcboxTask } from "./step-btcbox-taks";
import { StepCoreTask } from "./step-core-taks";
import { StepCsmfTask } from "./step-csmf-taks";
import { StepInmTask } from "./step-inm-taks";
import { UpdateState } from "./update-state";

export default [
  // SendOperationTask,
  // RequestOperationTask,
  // StepBtcboxTask,
  // StepCsmfTask,
  // StepCoreTask,
  // StepInmTask,
  // ComponenteTask
  // UpdateState,
  Dummy,
].forEach((task) => new task());
