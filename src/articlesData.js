
const articlesData = [
{
id:1, 
title:'Nulla non vestibulum leo', 
topic:'travel', 
author: 'John Doe', 
date:'March 23, 2024', 
content: {
    paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus lobortis vehicula. Vestibulum mi massa, aliquet eget nisl ac, eleifend sagittis ex. Nam vel porta odio, eget facilisis nunc. Aliquam consectetur dui vitae enim porttitor, non volutpat ligula gravida. Praesent mauris felis, malesuada eu neque vitae, dignissim rhoncus tortor.',
    paragraph2: 'Aenean a elit euismod, pretium magna a, congue turpis. Integer arcu quam, sodales eget nisi eget, molestie dictum ex. Nulla non vestibulum leo. Nulla facilisi. Etiam quis elit dolor. Aliquam vel aliquam enim. Proin venenatis dui a metus feugiat viverra. Aenean dapibus sollicitudin sagittis. Ut bibendum, lorem efficitur malesuada convallis, odio orci varius tortor, non dictum ante dui eget enim. Nullam non ante eu metus eleifend volutpat sed non augue. In in neque non nulla egestas aliquet nec a nunc. Etiam rhoncus tincidunt nibh, ac posuere turpis faucibus vitae. Vestibulum congue ullamcorper dapibus. Nulla porta sapien non felis accumsan, ut fermentum quam vestibulum. Sed vitae nisi ante. Etiam malesuada mi congue nisl sollicitudin, in pharetra turpis euismod. Pellentesque magna neque, hendrerit a urna sit amet, pretium consectetur eros. Duis tincidunt molestie metus a pulvinar. Sed lacinia quam eget mi mattis lobortis. Etiam ac odio a leo aliquet venenatis. Sed sed sem.'
    }
},
{
id:2, 
title:'Aenean dapibus sollicitudin sagittis',
topic:'cooking', 
author: 'Jane Doe', 
date:'April 4, 2024', 
content: {
    paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus lobortis vehicula. Vestibulum mi massa, aliquet eget nisl ac, eleifend sagittis ex. Nam vel porta odio, eget facilisis nunc. Aliquam consectetur dui vitae enim porttitor, non volutpat ligula gravida. Praesent mauris felis, malesuada eu neque vitae, dignissim rhoncus tortor.',
    paragraph2: 'Aenean a elit euismod, pretium magna a, congue turpis. Integer arcu quam, sodales eget nisi eget, molestie dictum ex. Nulla non vestibulum leo. Nulla facilisi. Etiam quis elit dolor. Aliquam vel aliquam enim. Proin venenatis dui a metus feugiat viverra. Aenean dapibus sollicitudin sagittis. Ut bibendum, lorem efficitur malesuada convallis, odio orci varius tortor, non dictum ante dui eget enim. Nullam non ante eu metus eleifend volutpat sed non augue. In in neque non nulla egestas aliquet nec a nunc. Etiam rhoncus tincidunt nibh, ac posuere turpis faucibus vitae. Vestibulum congue ullamcorper dapibus. Nulla porta sapien non felis accumsan, ut fermentum quam vestibulum. Sed vitae nisi ante. Etiam malesuada mi congue nisl sollicitudin, in pharetra turpis euismod. Pellentesque magna neque, hendrerit a urna sit amet, pretium consectetur eros. Duis tincidunt molestie metus a pulvinar. Sed lacinia quam eget mi mattis lobortis. Etiam ac odio a leo aliquet venenatis. Sed sed sem.'
    }
},
{
id:3, 
 title:'Nullam non ante eu metus eleifend volutpat sed non augue', 
 topic:'life-hacks', 
 author: 'Jane Doe', 
 date:'February 23, 2024', 
 content: {
    paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus lobortis vehicula. Vestibulum mi massa, aliquet eget nisl ac, eleifend sagittis ex. Nam vel porta odio, eget facilisis nunc. Aliquam consectetur dui vitae enim porttitor, non volutpat ligula gravida. Praesent mauris felis, malesuada eu neque vitae, dignissim rhoncus tortor.',
    paragraph2: 'Aenean a elit euismod, pretium magna a, congue turpis. Integer arcu quam, sodales eget nisi eget, molestie dictum ex. Nulla non vestibulum leo. Nulla facilisi. Etiam quis elit dolor. Aliquam vel aliquam enim. Proin venenatis dui a metus feugiat viverra. Aenean dapibus sollicitudin sagittis. Ut bibendum, lorem efficitur malesuada convallis, odio orci varius tortor, non dictum ante dui eget enim. Nullam non ante eu metus eleifend volutpat sed non augue. In in neque non nulla egestas aliquet nec a nunc. Etiam rhoncus tincidunt nibh, ac posuere turpis faucibus vitae. Vestibulum congue ullamcorper dapibus. Nulla porta sapien non felis accumsan, ut fermentum quam vestibulum. Sed vitae nisi ante. Etiam malesuada mi congue nisl sollicitudin, in pharetra turpis euismod. Pellentesque magna neque, hendrerit a urna sit amet, pretium consectetur eros. Duis tincidunt molestie metus a pulvinar. Sed lacinia quam eget mi mattis lobortis. Etiam ac odio a leo aliquet venenatis. Sed sed sem.'
    }
},
{
id:4, 
title:'estibulum congue ullamcorper dapibus',
topic:'animals', 
author: 'John Doe', 
date:'March 20, 2024', 
content: {
    paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus lobortis vehicula. Vestibulum mi massa, aliquet eget nisl ac, eleifend sagittis ex. Nam vel porta odio, eget facilisis nunc. Aliquam consectetur dui vitae enim porttitor, non volutpat ligula gravida. Praesent mauris felis, malesuada eu neque vitae, dignissim rhoncus tortor.',
    paragraph2: 'Aenean a elit euismod, pretium magna a, congue turpis. Integer arcu quam, sodales eget nisi eget, molestie dictum ex. Nulla non vestibulum leo. Nulla facilisi. Etiam quis elit dolor. Aliquam vel aliquam enim. Proin venenatis dui a metus feugiat viverra. Aenean dapibus sollicitudin sagittis. Ut bibendum, lorem efficitur malesuada convallis, odio orci varius tortor, non dictum ante dui eget enim. Nullam non ante eu metus eleifend volutpat sed non augue. In in neque non nulla egestas aliquet nec a nunc. Etiam rhoncus tincidunt nibh, ac posuere turpis faucibus vitae. Vestibulum congue ullamcorper dapibus. Nulla porta sapien non felis accumsan, ut fermentum quam vestibulum. Sed vitae nisi ante. Etiam malesuada mi congue nisl sollicitudin, in pharetra turpis euismod. Pellentesque magna neque, hendrerit a urna sit amet, pretium consectetur eros. Duis tincidunt molestie metus a pulvinar. Sed lacinia quam eget mi mattis lobortis. Etiam ac odio a leo aliquet venenatis. Sed sed sem.'
    }
},
{
id:5, 
title:'Etiam ac odio a leo aliquet venenatis', 
topic:'nature', 
author: 'Jane Doe', 
date:'March 3, 2024', 
content: {
    paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus lobortis vehicula. Vestibulum mi massa, aliquet eget nisl ac, eleifend sagittis ex. Nam vel porta odio, eget facilisis nunc. Aliquam consectetur dui vitae enim porttitor, non volutpat ligula gravida. Praesent mauris felis, malesuada eu neque vitae, dignissim rhoncus tortor.',
    paragraph2: 'Aenean a elit euismod, pretium magna a, congue turpis. Integer arcu quam, sodales eget nisi eget, molestie dictum ex. Nulla non vestibulum leo. Nulla facilisi. Etiam quis elit dolor. Aliquam vel aliquam enim. Proin venenatis dui a metus feugiat viverra. Aenean dapibus sollicitudin sagittis. Ut bibendum, lorem efficitur malesuada convallis, odio orci varius tortor, non dictum ante dui eget enim. Nullam non ante eu metus eleifend volutpat sed non augue. In in neque non nulla egestas aliquet nec a nunc. Etiam rhoncus tincidunt nibh, ac posuere turpis faucibus vitae. Vestibulum congue ullamcorper dapibus. Nulla porta sapien non felis accumsan, ut fermentum quam vestibulum. Sed vitae nisi ante. Etiam malesuada mi congue nisl sollicitudin, in pharetra turpis euismod. Pellentesque magna neque, hendrerit a urna sit amet, pretium consectetur eros. Duis tincidunt molestie metus a pulvinar. Sed lacinia quam eget mi mattis lobortis. Etiam ac odio a leo aliquet venenatis. Sed sed sem.'
    }
},
{
id:6, 
title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
topic:'hobby', 
author: 'John Doe', 
date:'April 10, 2024', 
content: {
    paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus lobortis vehicula. Vestibulum mi massa, aliquet eget nisl ac, eleifend sagittis ex. Nam vel porta odio, eget facilisis nunc. Aliquam consectetur dui vitae enim porttitor, non volutpat ligula gravida. Praesent mauris felis, malesuada eu neque vitae, dignissim rhoncus tortor.',
    paragraph2: 'Aenean a elit euismod, pretium magna a, congue turpis. Integer arcu quam, sodales eget nisi eget, molestie dictum ex. Nulla non vestibulum leo. Nulla facilisi. Etiam quis elit dolor. Aliquam vel aliquam enim. Proin venenatis dui a metus feugiat viverra. Aenean dapibus sollicitudin sagittis. Ut bibendum, lorem efficitur malesuada convallis, odio orci varius tortor, non dictum ante dui eget enim. Nullam non ante eu metus eleifend volutpat sed non augue. In in neque non nulla egestas aliquet nec a nunc. Etiam rhoncus tincidunt nibh, ac posuere turpis faucibus vitae. Vestibulum congue ullamcorper dapibus. Nulla porta sapien non felis accumsan, ut fermentum quam vestibulum. Sed vitae nisi ante. Etiam malesuada mi congue nisl sollicitudin, in pharetra turpis euismod. Pellentesque magna neque, hendrerit a urna sit amet, pretium consectetur eros. Duis tincidunt molestie metus a pulvinar. Sed lacinia quam eget mi mattis lobortis. Etiam ac odio a leo aliquet venenatis. Sed sed sem.'
    }
}
]

export default articlesData;

