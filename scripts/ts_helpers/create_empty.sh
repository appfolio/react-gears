
cat >"$1.d.ts" <<EOF
interface $1PropTypes {

}
declare const $1: React.StatelessComponent<$1PropTypes>;
export default $1;
EOF
