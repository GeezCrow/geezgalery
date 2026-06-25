// src/components/GameShowcase/GameShowcase.jsx
import TechWidget from './TechWidget';
import LinksWidget from './LinksWidget';
import TextSection from './TextSection';
import CharacterGrid from './CharacterGrid';
import MechanicsList from './MechanicsList';
import ShotViewer from './ShotViewer';
import DevNote from './DevNote';
import FinalProgress from './FinalProgress';
import AgeRating from './AgeRating';

import {
  gameInfo,
  premise,
  characters,
  mechanics,
  gameplayShots,
  devNote,
  conceptShots,
  milestones,
  links,
  tags,
  ageWarning,
} from '../../data/gameShowcase';

export default function GameShowcase() {
  return (
    <div className="gs-layout">
      {/* SIDEBAR IZQUIERDA: ficha técnica */}
      <div className="gs-sidebar-left">
        <TechWidget
          engine={gameInfo.engine}
          started={gameInfo.started}
          status={gameInfo.status}
          genre={gameInfo.genre}
          progress={gameInfo.progress}
        />
      </div>

      {/* CENTRO: cartucho con toda la info */}
      <div className="cart-wrap">
        <div className="cart-topbar">
          <span className="label">:: INDIEDEV PROJECT FILE</span>
          <span className="blink" />
        </div>

        <div className="cart-body">
          <div className="game-title">
            {gameInfo.title}
            <span style={{ color: '#c8d8a8' }}>*</span>
          </div>
          <div className="game-subtitle">&gt;&gt; {gameInfo.subtitle}</div>

          <TextSection title="premise">{premise}</TextSection>

          <div className="section-block">
            <div className="s-head">characters</div>
            <CharacterGrid characters={characters} />
          </div>

          <div className="section-block">
            <div className="s-head">mechanics</div>
            <MechanicsList items={mechanics} />
          </div>

          <div className="section-block">
            <div className="s-head">gameplay screenshots</div>
            <ShotViewer shots={gameplayShots} />
            <DevNote>{devNote}</DevNote>
          </div>

          <div className="section-block">
            <div className="s-head">concept art</div>
            <ShotViewer shots={conceptShots} />
          </div>

          <FinalProgress progress={gameInfo.progress} milestones={milestones} />

          <AgeRating
            badge={ageWarning.badge}
            title={ageWarning.title}
            text={ageWarning.text}
          />
        </div>
      </div>

      {/* SIDEBAR DERECHA: links + tags */}
      <div className="gs-sidebar-right">
        <LinksWidget links={links} tags={tags} />
      </div>
    </div>
  );
}
