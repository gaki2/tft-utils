import { ItemName_9b } from '../../../_generated/season_9b/items_season_9b';
import { LanguageType } from '../../../types';
import { CommonBadgeProps } from '../common_props_type';
import { ItemGetter } from '../../../getter/item_getter';
import { ErrorBadge, errorText } from '../ErrorBadge';
import { useItemBadge9b } from './useItemBadge9b';
import { ItemBadge } from './ItemBadge';

export type ItemBadge9bProps = {
  name: ItemName_9b;
  lang?: LanguageType;
} & CommonBadgeProps;

export const ItemBadge9b = (props: ItemBadge9bProps) => {
  const { name, lang = 'ko', ...rest } = props;
  const itemData = ItemGetter.getItemDataFromName(name, 'season_9b');

  if (!itemData) {
    return (
      <ErrorBadge
        errorText={errorText({
          location: 'ItemBadge9b',
          desc: `${name}: 존재하지 않는 이름입니다.`,
        })}
      />
    );
  }

  const badgeProps = useItemBadge9b({ ...itemData, lang });

  return <ItemBadge {...badgeProps} {...rest} />;
};
