import { TraitName_10 } from '../../../_generated/season_10/traits_season_10';
import { LanguageType } from '../../../types';
import { CommonBadgeProps } from '../common_props_type';
import { useTraitBadge10 } from './useTraitBadge10';
import { TraitGetter } from '../../../getter/trait_getter';
import { ErrorBadge, errorText } from '../ErrorBadge';
import { TraitBadge } from './TraitBadge';

export type TraitBadge10Props = {
  name: TraitName_10;
  lang?: LanguageType;
  disableTooltip?: boolean;
} & CommonBadgeProps;

export const TraitBadge10 = (props: TraitBadge10Props) => {
  const { name, lang = 'ko', ...rest } = props;
  const traitData = TraitGetter.getTraitDataFromName(name, 'season_10');

  if (!traitData) {
    return (
      <ErrorBadge errorText={errorText({ location: 'TraitBadge10', desc: `${name} is Wrong` })} />
    );
  }

  const badgeProps = useTraitBadge10({ ...traitData, lang });

  return <TraitBadge {...badgeProps} {...rest} />;
};
