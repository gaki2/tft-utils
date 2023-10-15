import { TraitData } from '../../../script/traitObject';

type TraitsViewProps = {
  traits: TraitData[];
};

export const TraitsView = ({ traits }: TraitsViewProps) => {
  return (
    <div
      id='traits_wrapper'
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '16px 12px 16px 16px',
        gap: '12px',
        borderRight: '1px solid #3e5a63',
        justifyContent: 'center',
      }}>
      {traits?.map((trait) => (
        <div style={{ display: 'flex', gap: '8px' }} key={trait.name}>
          <div
            title={trait.name}
            style={{
              backgroundImage: `url(${trait.url ?? ''})`,
              width: '20px',
              height: '20px',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div>
            <span style={{ color: '#fff' }}>{trait.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
