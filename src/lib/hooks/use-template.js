import { useMemo } from 'react';
import { template, tval, tbval, tival, tfval } from '@dsplay/template-utils';

export default useTemplate = () => template;

export const useTemplateVal = (key, def) => useMemo(() => tval(key, def), []);
export const useTemplateBooleanVal = (key, def) => useMemo(() => tbval(key, def), []);
export const useTemplateIntVal = (key, def) => useMemo(() => tival(key, def), []);
export const useTemplateFloatVal = (key, def) => useMemo(() => tfval(key, def), []);