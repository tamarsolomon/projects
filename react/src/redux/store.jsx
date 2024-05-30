import { datareducer } from "./dataReducer";
import { createStore } from "redux";

export const store=createStore(datareducer)
window.store=store
