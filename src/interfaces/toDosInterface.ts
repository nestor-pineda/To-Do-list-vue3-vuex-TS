import { Ref } from "vue";

export interface ToDoItemInterface {
  title: string;
  description: string | Ref<string>;
  tags: string[];
  priority: string;
  id: number;
}

export interface NewToDoItemInterface {
  title: string | Ref<null> | null;
  description: string | Ref<null> | null;
  tags: string[];
  priority: string;
}

export interface EditPayloadInterface {
  title: string;
  id: string;
}
