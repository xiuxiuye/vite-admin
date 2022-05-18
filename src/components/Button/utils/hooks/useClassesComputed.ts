import { computed } from 'vue'
import { UseClassesComputed, Classes } from '../../types/button'

const useClassesComputed: UseClassesComputed = (classNamePrefix, props) => {
  const classes = computed<Classes>(() => {
    return [
      classNamePrefix,
      `${classNamePrefix}-type-${props?.type}`,
      `${classNamePrefix}-size-${props?.size}`,
      {
        [`${classNamePrefix}-shape-${props?.shape}`]: !!props?.shape,
        [`${classNamePrefix}-shape-${props?.shape}-${props?.size}`]: !!props?.shape,
        [`${classNamePrefix}-long`]: props?.long,
        [`${classNamePrefix}-loading`]: props?.loading,
        [`${classNamePrefix}-border-dashed`]: props?.dashed,
        [`${classNamePrefix}-ghost`]: props?.ghost,
        [`${classNamePrefix}-${props?.type}-ghost`]: props?.ghost && props?.type !== 'normal',
        [`${classNamePrefix}-${props?.type}-text`]: props?.text,
        [`${classNamePrefix}-disabled`]: props?.disabled,
        [`${classNamePrefix}-text-disabled`]: props?.disabled && props?.text,
        [`${classNamePrefix}-ghost-disabled`]: props?.disabled && props?.ghost
      }
    ]
  })

  return classes
}

export default useClassesComputed
