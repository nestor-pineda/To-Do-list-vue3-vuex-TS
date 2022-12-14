import { Ref } from "vue";

export interface NewToDoItemInterface {
  title: string | Ref<null> | null;
  description: string | Ref<null> | null;
  tags: string[];
  priority: string;
}
