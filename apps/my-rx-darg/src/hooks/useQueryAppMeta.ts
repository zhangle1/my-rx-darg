import { ID } from "@my-rx-darg/share";
import { useCallback, useEffect, useState } from "react";
import { IMeta } from "../interfaces/meta";
import { Entities } from "./events/entityName";
import { allMetas } from "../data/meta"
import { EVENT_DATA_CHANGED, off, on } from "./events";


export function useQueryAppMeta(appId: ID) {
    const [loading, setLoading] = useState<boolean>()
    const [meta, setMeta] = useState<IMeta>()
  
    const fillData = useCallback(() => {
      setLoading(true)
      setTimeout(() => {
        setMeta(allMetas.find(meta => meta.app?.id === appId))
        setLoading(false)
      }, 300)
    }, [appId])
  
    useEffect(() => {
      fillData()
    }, [fillData])
  
    const handleDataEvent = useCallback((event: CustomEvent) => {
      if (event.detail === Entities.Meta) {
        fillData()
      }
    }, [fillData])
  
    useEffect(() => {
      on(EVENT_DATA_CHANGED, handleDataEvent as any);
      return () => {
        off(EVENT_DATA_CHANGED, handleDataEvent as any);
      }
    }, [handleDataEvent])
  
    return { meta, loading }
}