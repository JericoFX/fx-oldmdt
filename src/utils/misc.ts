import { InlineNotification } from "carbon-components-svelte";
export const isEnvBrowser = (): boolean => !(window as any).invokeNative;
type kind ={
  "warning"| "error" | "info" | "info-square" | "success" | "warning-alt"
}
/**
 * 
 * @param titulo 
 * @param text 
 * @param kind 
 * @param where 
 * @param cb 
 */
export const inlineNotification = (titulo:string,text:string,kind:kind,where:HTMLElement | string,cb:Function){
const m = new InlineNotification({target:where,props:{
  title:titulo,
  subtitle:text,
  kind:kind,
  lowContrast:true,
  timeout:3000
}})
  if (cb){
    cb(m)
  }
  return m
}