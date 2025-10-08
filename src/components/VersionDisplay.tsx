import React from 'react';
import packageJson from '../../package.json';

export const VersionDisplay: React.FC = () => {
  return (
    <span className="text-sm text-gray-500 dark:text-gray-400">
      v{packageJson.version}
    </span>
  );
};
