import { Ionicons } from '@expo/vector-icons'
import * as Font from 'expo-font'
import * as React from 'react'

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false)

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // test sleep to replicate the app loading
        await sleep(2000)

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
        })
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e)
      } finally {
        setLoadingComplete(true)
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  return isLoadingComplete
}
