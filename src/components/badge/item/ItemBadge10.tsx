import { LanguageType } from '../../../types';
import { CommonBadgeProps } from '../common_props_type';
import { ItemGetter } from '../../../getter/item_getter';
import { ErrorBadge, errorText } from '../ErrorBadge';
import { useItemBadge10 } from './useItemBadge10';
import { ItemBadge } from './ItemBadge';
import { ItemName_10 } from '../../../_generated/season_10/items_season_10';

export type ItemBadge10Props = {
  name: ItemName_10;
  lang?: LanguageType;
} & CommonBadgeProps;

export const ItemBadge10 = (props: ItemBadge10Props) => {
  const { name, lang = 'ko', ...rest } = props;
  const itemData = ItemGetter.getItemDataFromName(name, 'season_10');

  if (!itemData) {
    return (
      <ErrorBadge
        errorText={errorText({
          location: 'ItemBadge10',
          desc: `${name}: 존재하지 않는 이름입니다.`,
        })}
      />
    );
  }

  const badgeProps = useItemBadge10({ ...itemData, lang });

  return <ItemBadge {...badgeProps} {...rest} />;
};
