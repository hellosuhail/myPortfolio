import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineModle() {
  return (
    <div className="w-full h-screen">
      <Suspense fallback={<div className="text-center mt-10">Loading 3D model...</div>}>
        <Spline scene="https://prod.spline.design/oaAraN9HS9N0fUnx/scene.splinecode" />
      </Suspense>
    </div>
  );
}
