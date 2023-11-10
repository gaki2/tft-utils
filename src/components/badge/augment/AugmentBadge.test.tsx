import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AugmentBadge } from './AugmentBadge';
import { LanguageType, Season } from '../../../types';
import { LANGUAGES, SEASONS } from '../../../types/config';
import { AugmentGetter } from '../../../getter/augment_getter';

describe('AugmentBadge 테스트', () => {
  const config: [Season, LanguageType][] = SEASONS.reduce((acc, season) => {
    for (const language of LANGUAGES) {
      acc.push([season, language]);
    }
    return acc;
  }, [] as [Season, LanguageType][]);

  describe.each(config)('렌더링 테스트 [시즌: %s, 언어: %s]', (season, language) => {
    const augmentGetter = new AugmentGetter(season, language);
    const augmentNames = augmentGetter.getAllAugmentNames();

    test.each(augmentNames)('단일 AgumentBadge 렌더링 테스트', (name) => {
      render(<AugmentBadge season={season} name={name} lang={language} />);
      const imgElement = screen.getByRole('img');
      const alt = imgElement.getAttribute('alt');

      expect(alt).not.toBe('');
    });
  });
});
