import React, { useEffect } from 'react';

const FacebookPageWidget = ({ 
  width = 340, 
  height = 500, 
  showTabs = ["timeline"], 
  hideCover = false,
  showFacepile = true 
}) => {
  useEffect(() => {
    // Initialize Facebook SDK
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="facebook-widget">
      <div
        className="fb-page"
        data-href="https://www.facebook.com/profile.php?id=61573075676170"
        data-tabs={showTabs.join(',')}
        data-width={width}
        data-height={height}
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover={hideCover}
        data-show-facepile={showFacepile}
      >
        <blockquote 
          cite="https://www.facebook.com/profile.php?id=61573075676170" 
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/profile.php?id=61573075676170">
            Ukraine Hilfe Facebook Page
          </a>
        </blockquote>
      </div>
    </div>
  );
};

export default FacebookPageWidget;
