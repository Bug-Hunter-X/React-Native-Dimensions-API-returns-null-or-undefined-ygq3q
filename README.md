## React Native Dimensions API returns null or undefined

This repository demonstrates a common issue in React Native where the `Dimensions` API returns `null` or `undefined` when attempting to access screen dimensions before the component has fully mounted or when the dimensions haven't been calculated. The provided code showcases the problem and offers a solution using the `useEffect` hook to ensure the dimensions are accessed after the component has mounted.

### Problem:

When accessing the screen dimensions immediately, the `Dimensions.get('window')` call may return null because the layout hasn't finalized. 

### Solution:

The solution utilizes the `useEffect` hook to access the dimensions after the component mounts. This ensures the dimensions are available and prevents unexpected null or undefined values.  The useEffect hook is used with an empty dependency array [] to run only once after the component mounts.