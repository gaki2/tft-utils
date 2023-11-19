import { AugmentName_9b } from '../../../_generated/season_9b/augments_season_9b';
import { AugmentGetter } from '../../../getter/augment_getter';
import { ErrorBadge, errorText } from '../ErrorBadge';
import { AugmentBadge } from './AugmentBadge';
import { CommonBadgeProps } from '../common_props_type';
import { LanguageType } from '../../../types';
import { useAugmentBadge9b } from './useAugmentBadge9b';

export type AugmentBadge9bProps = {
  name: AugmentName_9b;
  lang?: LanguageType;
} & CommonBadgeProps;

export const AugmentBadge9b = (props: AugmentBadge9bProps) => {
  const { name, lang = 'ko', ...rest } = props;
  const data = AugmentGetter.getAugmentDataFromName(name, 'season_9b');

  if (!data) {
    return (
      <ErrorBadge
        errorText={errorText({ location: 'AugmentBadge9b', desc: `${name} 이 잘못되었습니다.` })}
      />
    );
  }

  const badgeProps = useAugmentBadge9b({ ...data, lang });

  return <AugmentBadge {...badgeProps} />;
};
