(function() {var implementors = {};
implementors["futures_util"] = [{"text":"impl&lt;A, B&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"enum\" href=\"futures_util/future/enum.Either.html\" title=\"enum futures_util::future::Either\">Either</a>&lt;A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>,&nbsp;</span>","synthetic":false,"types":["futures_util::future::either::Either"]},{"text":"impl&lt;St&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/stream/struct.IntoAsyncRead.html\" title=\"struct futures_util::stream::IntoAsyncRead\">IntoAsyncRead</a>&lt;St&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St: <a class=\"trait\" href=\"futures_util/stream/trait.TryStream.html\" title=\"trait futures_util::stream::TryStream\">TryStream</a>&lt;Error = <a class=\"struct\" href=\"futures_util/io/struct.Error.html\" title=\"struct futures_util::io::Error\">Error</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;St::<a class=\"type\" href=\"futures_util/stream/trait.TryStream.html#associatedtype.Ok\" title=\"type futures_util::stream::TryStream::Ok\">Ok</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt;,&nbsp;</span>","synthetic":false,"types":["futures_util::stream::try_stream::into_async_read::IntoAsyncRead"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.AllowStdIo.html\" title=\"struct futures_util::io::AllowStdIo\">AllowStdIo</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,&nbsp;</span>","synthetic":false,"types":["futures_util::io::allow_std::AllowStdIo"]},{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.BufReader.html\" title=\"struct futures_util::io::BufReader\">BufReader</a>&lt;R&gt;","synthetic":false,"types":["futures_util::io::buf_reader::BufReader"]},{"text":"impl&lt;T, U&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.Chain.html\" title=\"struct futures_util::io::Chain\">Chain</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>,&nbsp;</span>","synthetic":false,"types":["futures_util::io::chain::Chain"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.Cursor.html\" title=\"struct futures_util::io::Cursor\">Cursor</a>&lt;T&gt;","synthetic":false,"types":["futures_util::io::cursor::Cursor"]},{"text":"impl <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.Empty.html\" title=\"struct futures_util::io::Empty\">Empty</a>","synthetic":false,"types":["futures_util::io::empty::Empty"]},{"text":"impl <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.Repeat.html\" title=\"struct futures_util::io::Repeat\">Repeat</a>","synthetic":false,"types":["futures_util::io::repeat::Repeat"]},{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.ReadHalf.html\" title=\"struct futures_util::io::ReadHalf\">ReadHalf</a>&lt;R&gt;","synthetic":false,"types":["futures_util::io::split::ReadHalf"]},{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.Take.html\" title=\"struct futures_util::io::Take\">Take</a>&lt;R&gt;","synthetic":false,"types":["futures_util::io::take::Take"]}];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()