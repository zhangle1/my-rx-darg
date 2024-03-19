import { MetaContent } from "@my-rx-darg/uml-editor";
import { createContext } from "react";

export const MetaContext = createContext<MetaContent | undefined>(undefined)