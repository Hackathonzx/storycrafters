import React from 'react';
import Card from '../../components/Card';
import Button from '../../components/Button';

const StoryPage = () => {
  return (
    <div className="story-page">
      <div className="story-panel">
        <Card
          title="Chapter 1: The Beginning"
          description="Explore the first chapter of the Taiko Multiverse adventure."
          image="/images/chapter1.jpg"
        />
        <div className="voting-interface">
          <h2>Vote for the next story path</h2>
          <Button className="vote-button">Option 1</Button>
          <Button className="vote-button">Option 2</Button>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
