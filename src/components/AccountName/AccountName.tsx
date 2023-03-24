/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preseve that abilty, always export from Quest to regenerate this file.
 *   To setup props, bindings and actions, use the Quest editor
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import { styled } from '@mui/material/styles';
import InputField from 'src/components/InputField/InputField';
import { AccountNameProps } from 'src/types';

const AccountName1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: 'auto',
  width: 'fit-content',
});

const InputField1: any = styled(InputField)(({ theme }: any) => ({
  width: `550px`,
  margin: `0px`,
}));

function AccountName(props: AccountNameProps): JSX.Element {
  return (
    <AccountName1 className={props.className}>
      <InputField1 />
    </AccountName1>
  );
}

export default AccountName;