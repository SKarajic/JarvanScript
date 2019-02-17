
import { ExtraStat } from "./extrastat";
import { PrimaryTree } from "./primarytree";
import { SecondaryTree } from "./secondarytree";

export interface RunePage {
  primary: PrimaryTree;
  secondary: SecondaryTree;
  stats: Map<number, ExtraStat>;
}
