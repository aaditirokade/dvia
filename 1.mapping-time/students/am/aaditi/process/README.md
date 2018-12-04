## Process

Description of the contents of this folder and the logic of your data → retinal variables mapping.
### Medium variant
Hour, min, sec and milliseconds are mapped as a fucntion of the angle of concentric arcs and the opacity of their respective colors varies with the progress of the respective variant of time(e.g now.progress.min)

### Small variant
Angle of the arc is mapped as a fuction of a second representing a concept of 'light' and 'dark' (This is for the purpose of presenting the concept though it makes more sense to apply this concepts to the 'days' variant. Arc changes it's direction for even and odd (x%2 === 0) fractions of a second.

### Large variant
A pattern is explored as a combination of medium and small variants. The angles of arcs are a function of hour, min, sec and milliseconds resp from top to bottom. The contarsting colors of the entire pattern are a function of days. When we look at the entire week/month, this color variation shows up. In the next step, this idea could be extended to representation of different seasons with different patterns and colors.
