import { connect } from 'react-redux';
import LayoutOptionsDialog from './LayoutOptionsDialog';
import { RootState } from '../../../store/state';
import { LayoutOptionsActions } from '../../../actions/actions';

const mapStateToProps = (state: RootState) => {
  return {
    selectedKeyboardOptions: state.layoutOptions.selectedOptions,
    keyboardLayoutOptions: state.entities.keyboardDefinition?.layouts.labels,
  };
};
export type LayoutOptionsDialogStateType = ReturnType<typeof mapStateToProps>;

const mapDispatchToProps = (_dispatch: any) => {
  return {
    setLayoutOption: (optionIndex: number, option: string | null) => {
      _dispatch(LayoutOptionsActions.updateSelectedOption(optionIndex, option));
    },
  };
};

export type LayoutOptionsDialogActionsType = ReturnType<
  typeof mapDispatchToProps
>;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutOptionsDialog);
