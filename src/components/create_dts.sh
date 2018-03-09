
cat >"$1.d.ts" <<EOF
import $1 from 'reactstrap/lib/$1';
export default $1;
EOF
