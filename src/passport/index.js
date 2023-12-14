import passport from "passport";
import { Strategy as KakaoStrategy } from "passport-kakao";

export const configurePassport = () => {
    passport.use(
        new KakaoStrategy(
            {
                clientID: "3980c403de0926c15940e444945aef79",
                callbackURL: "http://localhost:3001/api/auth/kakao/callback",
            },
            async (accessToken, refreshToken, profile, done) => {
                try {
                    const email = profile._json.kakao_account.email;
                    const user = {
                        kakaoId: profile.id,
                        email,
                        username: profile.username || profile.displayName,
                    };

                    done(null, user);
                } catch (error) {
                    done(error);
                }
            }
        )
    );

    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });

    return passport;
};
