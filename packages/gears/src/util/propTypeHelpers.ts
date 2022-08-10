type MixinPropTypes<ComponentType, PropsType> = ComponentType & {
  defaultProps: Partial<PropsType>;
};

export default MixinPropTypes;
