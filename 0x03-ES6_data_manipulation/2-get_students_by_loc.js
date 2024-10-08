export default function getStudentsByLocation(students, city) {
  return students.filter((loc) => loc.location === city);
}
