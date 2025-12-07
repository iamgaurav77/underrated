import type { ICellRendererParams } from 'ag-grid-community';
import type { Performer } from '../../@types';
import {
  StyledProfileCellContainer,
  StyledProfileImageCell,
  StyledProfileNameCell,
} from '../../styled';

const ProfileCellRenderer = (params: ICellRendererParams<Performer>) => {
  if (!params.data) return null;
  return (
    <StyledProfileCellContainer>
      <StyledProfileImageCell src={params.data.profileImage} alt={params.data.name} />
      <StyledProfileNameCell>{params.data.name}</StyledProfileNameCell>
    </StyledProfileCellContainer>
  );
};

export default ProfileCellRenderer;
