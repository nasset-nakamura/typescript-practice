interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

// Partial：宣言時点では各プロパティを任意扱いとする。returnで返却するタイミングで型キャストを行う
function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  const courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

// Readonlyとすることで読み取り専用となる
const names: Readonly<string[]> = ['test1', 'test2'];
names.push('test3');
names.pop();
