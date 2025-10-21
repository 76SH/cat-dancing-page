import { useState } from 'react';
import './DancingCat.css';
import catImage from '../assets/images/cat.svg';

function DancingCat() {
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleAnimation = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="dancing-cat-container">
      <h1 className="title">춤추는 고양이 🎵</h1>

      <div className="stage">
        {/* 배경 파티클들 */}
        <div className="particles">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            >
              ⭐
            </div>
          ))}
        </div>

        {/* 춤추는 고양이 */}
        <div className={`cat-wrapper ${isPlaying ? 'dancing' : 'paused'}`}>
          <img src={catImage} alt="Dancing Cat" className="cat" />

          {/* 반짝이 효과 */}
          <div className="sparkles">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="sparkle"
                style={{
                  '--angle': `${i * 45}deg`,
                  animationDelay: `${i * 0.2}s`
                }}
              >
                ✨
              </div>
            ))}
          </div>
        </div>

        {/* 바닥 그림자 */}
        <div className={`shadow ${isPlaying ? 'dancing' : 'paused'}`}></div>
      </div>

      {/* 컨트롤 버튼 */}
      <div className="controls">
        <button
          onClick={toggleAnimation}
          className="control-button"
          aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
        >
          {isPlaying ? '⏸️ 정지' : '▶️ 재생'}
        </button>
      </div>

      <p className="description">
        {isPlaying ? '고양이가 신나게 춤추고 있어요!' : '고양이가 쉬고 있어요'}
      </p>
    </div>
  );
}

export default DancingCat;
