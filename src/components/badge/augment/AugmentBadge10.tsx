import { AugmentGetter } from '../../../getter/augment_getter';
import { ErrorBadge, errorText } from '../ErrorBadge';
import { AugmentBadge } from './AugmentBadge';
import { CommonBadgeProps } from '../common_props_type';
import { LanguageType } from '../../../types';
import { useAugmentBadge10 } from './useAugmentBadge10';
import { AugmentName_10 } from '../../../_generated/season_10/augments_season_10';

export type AugmentBadge10Props = {
  name: AugmentName_10;
  lang?: LanguageType;
} & CommonBadgeProps;

export const AugmentBadge10 = (props: AugmentBadge10Props) => {
  const { name, lang = 'ko', ...rest } = props;
  const data = AugmentGetter.getAugmentDataFromName(name, 'season_10');

  if (!data) {
    return (
      <ErrorBadge
        errorText={errorText({ location: 'AugmentBadge10', desc: `${name} 이 잘못되었습니다.` })}
      />
    );
  }

  const badgeProps = useAugmentBadge10({ ...data, lang });

  return <AugmentBadge {...badgeProps} {...rest} />;
};
