import React, { useEffect } from "react";
import { useGraph } from "./useGraph";
import { Dnd } from "@antv/x6-plugin-dnd";

export function useDnd() {
  const [dnd, setDnd] = React.useState<Dnd>()
  const graph = useGraph()
  useEffect(() => {
    const theDnd = graph
      ? new Dnd({
        target: graph,
        scaled: false,
      })
      : undefined;
    setDnd(theDnd);
  }, [graph]);

  return dnd
}