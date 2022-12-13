import { Ref } from "vue";

export interface NewToDoItemInterface {
  title: string | Ref<string>;
  description: string | Ref<string>;
  tags: string[];
  // priority: string[];
}
