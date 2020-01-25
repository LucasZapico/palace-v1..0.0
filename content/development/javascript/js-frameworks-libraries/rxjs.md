# Rx

### Observable

```typescript
import { Observable } from "rxjs/Observable"

var observable = Observable.create(function(observer:any){
  try {
      observer.next('Hey guys')
  } catch {
    observer.error(err)
  }
});

observable.subscribe(
  function(x:any){ console.log(x)},
  function(error:any){ console.error(error)},
  function(){console.log("complete")}
)

// unsubscribe
setTimeout(function(){
  observer.unsubscribe();
}, 6001)

// 


```
