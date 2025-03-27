resolve: {
    fallback: {
      "crypto": require.resolve("crypto-browserify"),
      "path": require.resolve("path-browserify"),
      "fs": false,
      "http": require.resolve("stream-http"),
      "querystring": require.resolve("querystring-es3"),
      "zlib": require.resolve("browserify-zlib")
    }
  }
  