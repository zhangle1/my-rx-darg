import { memo } from "react"
import { useCreateGraph, useEditorStore, useShowMap } from "../../hooks";
import { ILogicMetas } from "../../interfaces";
import styled from "styled-components";
import { Logic } from "../Logic";
import { useThemeToken } from "../../hooks/useThemeToken";


const CanvasArea = styled.div`
  position: relative;
  flex:1;
  display: flex;
  flex-flow: column;
  width: 0;
  background-color: ${props => props.theme.token?.colorBgContainer};
  //overflow: auto;
  box-sizing: border-box;
`


const CanvasContainer = styled.div`
  position: relative;
  flex: 1;
  box-sizing: border-box;
`