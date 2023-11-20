type ChampionImageViewProps = {
  championImageUrl: string;
  championDisplayName: string;
};

export const ChampionImageView = ({
  championImageUrl,
  championDisplayName,
}: ChampionImageViewProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        padding: '10px',
        alignItems: 'center',
        borderRight: '1px solid #3e5a63',
      }}>
      <div
        style={{
          width: '50px',
          height: '50px',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundImage: championImageUrl,
        }}
      />
      <span style={{ color: '#fff' }}>{championDisplayName}</span>
    </div>
  );
};
