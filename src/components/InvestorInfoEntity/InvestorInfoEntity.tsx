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
import H4 from 'src/components/H4/H4';
import EntityType from 'src/components/EntityType/EntityType';
import AccountName from 'src/components/AccountName/AccountName';
import TaxIdType from 'src/components/TaxIdType/TaxIdType';
import IdNumber from 'src/components/IdNumber/IdNumber';
import ForeignInvestor from 'src/components/ForeignInvestor/ForeignInvestor';
import Accreditation from 'src/components/Accreditation/Accreditation';
import { InvestorInfoEntityProps } from 'src/types';

const InvestorInfoEntity1: any = styled('div')({
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

const H41: any = styled(H4)(({ theme }: any) => ({
  width: `550px`,
  zIndex: `4`,
  margin: `0px`,
}));

const EntityType1: any = styled(EntityType)(({ theme }: any) => ({
  zIndex: `3`,
  margin: `16px 0px 0px 0px`,
}));

const AccountName1: any = styled(AccountName)(({ theme }: any) => ({
  zIndex: `2`,
  margin: `16px 0px 0px 0px`,
}));

const Frame215: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `550px`,
  zIndex: `1`,
  margin: `16px 0px 0px 0px`,
});

const TaxIdType1: any = styled(TaxIdType)(({ theme }: any) => ({
  flexGrow: `1`,
  margin: `0px`,
}));

const IdNumber1: any = styled(IdNumber)(({ theme }: any) => ({
  flexGrow: `1`,
  margin: `0px 0px 0px 16px`,
}));

const Component2: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `550px`,
  zIndex: `0`,
  margin: `16px 0px 0px 0px`,
});

const ForeignInvestor1: any = styled(ForeignInvestor)(({ theme }: any) => ({
  flexGrow: `1`,
  margin: `0px`,
}));

const Accreditation1: any = styled(Accreditation)(({ theme }: any) => ({
  flexGrow: `1`,
  margin: `0px 0px 0px 16px`,
}));

function InvestorInfoEntity(props: InvestorInfoEntityProps): JSX.Element {
  return (
    <InvestorInfoEntity1 className={props.className}>
      <H41 />
      <EntityType1 />
      <AccountName1 />
      <Frame215>
        <TaxIdType1 />
        <IdNumber1 />
      </Frame215>
      <Component2>
        <ForeignInvestor1 />
        <Accreditation1 />
      </Component2>
    </InvestorInfoEntity1>
  );
}

export default InvestorInfoEntity;